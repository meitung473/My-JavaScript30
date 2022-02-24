## 05 - Flex Panel Gallery
### 製作流程
1. 觀察
2. 構想程式邏輯

### 觀察
1. 點擊圖片後會新增兩個 class，`open`、`open-active`
2. open 動畫執行後才執行 open-active
3. 版面是並排擺滿的，點擊後的元素會撐開

要做的事 :  
1. 新增 click event & transitionend event
2. 修改 css

### 學習筆記  
#### flex
先將版面設成 flex
```css
.panels {
  min-height: 100vh;
  overflow: hidden;
  /* 從這邊開始新增 */
  display: flex;
}
```
把版面給撐開，利用 flex 的 `flex-grow`    
把子項目平均稱滿 flex 容器    
```css
.panel {  
  /* ... */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```
flex 這個屬性是三個屬性的合體  
flex(`flex-grow`|`flex-shrink`|`flex-basis`)  
- grow : 主軸剩餘空間分配。  
  例 : 容器 (container) 大小為 1200px，子層有三個 100px 的正方盒子，剩餘空間為 `1200 - (100*3) = 900`  
  如果 `.box:first-child` 設定 flex-grow : 1，會把剩下的空間都給第一個盒子， `100 + 900 = 1000 px`
- shrink : flex 遇到超出版面時的壓縮比，是 grow 的相反。  
  如果子層的總長度超過父層，把多餘的扣掉子層的空間。  
  例 : 子層三個盒子總長共有 900px，父層才 600px，此時的壓縮預設 `flex-shirnk : 1`， 300px 多餘的，平均一個盒子要減掉 100px 的空間。  
  如果子層盒子設 `flex-shrink : 0 `，就不會做壓縮，會超出 flexbox 凸出來  
- basis : 主軸的預設屬性。預設是會覆蓋 width，預設軸線是水平，改變 `flex-direction : column` ，主軸線則會變垂直，這時候看的就是 height。 basis 跟 width 同時出現的話，basis 優先。   

參考文章 : [圖解 Flexbox 進階屬性](https://cythilya.github.io/2017/04/06/flexbox-advance/)  

panel 的方向是 column，主軸是會調整到高度  
因為 p 是靠內容撐開，透過 flex-grow 屬性讓 p 都佔據一樣的比例，而高度 (basis) 自動分配   
```css
.panel>* {
  /* ... */
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
}
```
這邊有關於 flex 屬性的調整就到這邊，剩下的只是把文字往上移動，等到動畫執行回到原位。  

#### tranistionend : 監聽漸變動畫結束事件
利用 JavaScript 來控制動畫，可以監聽 tranistion 屬性的結束點，再觸發下一個動畫     
在 [01 的鼓](../01 - JavaScript Drum Kit/memo_01.md) 有實作過，再來複習一下  

可以先印出 `e.propertyName`，點擊後新增 open className 的動畫後，會看見有兩個動畫執行結束的順序，依序是 flex-grow 跟 font-size，執行完後才會把上下兩排字擺到正確位置，如何知道 transition 的結束，就是要使用 transitionend 的監聽事件啦。  

因為 flex-grow 在不同瀏覽器的名稱不太一樣，sarfari 之前沒有 flex-grow，但是有 flex  
所以我們只要等 **包含 flex 字眼的動畫** 結束，就可以加上第二個文字動畫   
propertyName 是 string，用 `includes` 來找包含的字眼  
```javascript
panel.addEventListener("transitionend", (e) => {
    if (e.propertyName.includes("flex")) {
        e.target.classList.toggle("open-active");
    }
});
```

### 總結   
透過本篇練習讓我更認識 flex 的用法以及 transitionend　這個事件，就可以搭出很多不同的動畫。  

