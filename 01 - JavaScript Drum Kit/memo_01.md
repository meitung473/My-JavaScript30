## 01 - Drum Kit
### 製作流程
1. 觀察
2. 構想程式邏輯
3. 試著優化

### 觀察
1. `div.key` 跟 `audio` 都有 `data-key` 屬性  
2. `data-key` 對應的是鍵盤的英文大寫 ASCII 
3. 點下按鍵的時候， key 會新增 `playing` 的 className

要做的事 :  
監聽按鈕事件，知道哪顆被按下，連結 audio 並且播放聲音 ， key 的 classList 新增 `playing`，等到動畫亮光結束，刪除 `playing`

### 學習筆記  
#### 按鈕事件 (keydown Event) 
 
按下鍵盤可以監聽按下哪個按鈕  
 ```javascript
window.addEventListener('keydown',function(e){
    //do something
})
```
`e` 的屬性包含 keyCode，對應 html 中想要的 `data-key` 屬性， `e.keyCode` 就是我們要的

```javascript
window.addEventListener('keydown',function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const aduio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
})
```  
拿到符合的 key 跟 audio DOM 物件  
裡面是用 ES6 的 template literal (樣板)，可以在字串中塞入 javascript 的表達式  

另一個也可以使用的 `keypress`，但是 MDN 並不推薦，因為要被棄用了。    

仔細看一下官方的範例，兩者差別在於範圍，keypress 只到中間有字符的地方，像是 shift、ctrl 就不包含，keydown 則是整個鍵盤按的到的範圍

#### HTMLMediaElement : audio  
audio 有關播放的有三種狀態  
```javascript
audio.play() //播放
audio.pasue() // 暫停
audio.reload() // 重新播放
```
`currentTime` : 目前媒體撥放的時間  

要達成的效果並不是音樂結束後才能按下一個鍵，在下一個撥放之前，要把音訊的播放時間歸零，才能達成連發聲音


### 試著優化
發現按鈕如果一直按著一段時間再放開，key 的 transition 就不會結束，導致使用者體驗不佳，明明沒按按鈕，畫面的按鈕是觸發的狀態。  
所以我讓音樂結束的同時，按鈕效果也消失。  

加入音訊的監聽事件  
```javascript
audio.addEventListener("ended", function () {
    key.classList.remove("playing");
});
```

參考 : [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

### 總結 
透過這次的實作，認識了  
1. 媒體標籤的使用  
2. `data-` : data- 標籤可以自訂資料  
3. 按鍵事件  
## 01 - Drum Kit
### 製作流程
1. 觀察
2. 構想程式邏輯
3. 試著優化

### 觀察
1. `div.key` 跟 `audio` 都有 `data-key` 屬性  
2. `data-key` 對應的是鍵盤的英文大寫 ASCII 
3. 點下按鍵的時候， key 會新增 `playing` 的 className

要做的事 :  
監聽按鈕事件，知道哪顆被按下，連結 audio 並且播放聲音 ， key 的 classList 新增 `playing`，等到動畫亮光結束，刪除 `playing`

### 學習筆記  
#### 按鈕事件 (keydown Event) 
 
按下鍵盤可以監聽按下哪個按鈕  
 ```javascript
window.addEventListener('keydown',function(e){
    //do something
})
```
`e` 的屬性包含 keyCode，對應 html 中想要的 `data-key` 屬性， `e.keyCode` 就是我們要的

```javascript
window.addEventListener('keydown',function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const aduio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
})
```  
拿到符合的 key 跟 audio DOM 物件  
裡面是用 ES6 的 template literal (樣板)，可以在字串中塞入 javascript 的表達式  

另一個也可以使用的 `keypress`，但是 MDN 並不推薦，因為要被棄用了。    

仔細看一下官方的範例，兩者差別在於範圍，keypress 只到中間有字符的地方，像是 shift、ctrl 就不包含，keydown 則是整個鍵盤按的到的範圍

#### HTMLMediaElement : audio  
audio 有關播放的有三種狀態  
```javascript
audio.play() //播放
audio.pasue() // 暫停
audio.reload() // 重新播放
```
`currentTime` : 目前媒體撥放的時間  

要達成的效果並不是音樂結束後才能按下一個鍵，在下一個撥放之前，要把音訊的播放時間歸零，才能達成連發聲音


### 試著優化
發現按鈕如果一直按著一段時間再放開，key 的 transition 就不會結束，導致使用者體驗不佳，明明沒按按鈕，畫面的按鈕是觸發的狀態。  
所以我讓音樂結束的同時，按鈕效果也消失。  

加入音訊的監聽事件  
```javascript
audio.addEventListener("ended", function () {
    key.classList.remove("playing");
});
```

參考 : [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

### 總結 
透過這次的實作，認識了  
1. 媒體標籤的使用  
2. `data-` : data- 標籤可以自訂資料  
3. 按鍵事件  
## 01 - Drum Kit
### 製作流程
1. 觀察
2. 構想程式邏輯
3. 試著優化

### 觀察
1. `div.key` 跟 `audio` 都有 `data-key` 屬性  
2. `data-key` 對應的是鍵盤的英文大寫 ASCII 
3. 點下按鍵的時候， key 會新增 `playing` 的 className

要做的事 :  
監聽按鈕事件，知道哪顆被按下，連結 audio 並且播放聲音 ， key 的 classList 新增 `playing`，等到動畫亮光結束，刪除 `playing`

### 學習筆記  
#### 按鈕事件 (keydown Event) 
 
按下鍵盤可以監聽按下哪個按鈕  
 ```javascript
window.addEventListener('keydown',function(e){
    //do something
})
```
`e` 的屬性包含 keyCode，對應 html 中想要的 `data-key` 屬性， `e.keyCode` 就是我們要的

```javascript
window.addEventListener('keydown',function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const aduio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
})
```  
拿到符合的 key 跟 audio DOM 物件  
裡面是用 ES6 的 template literal (樣板)，可以在字串中塞入 javascript 的表達式  

另一個也可以使用的 `keypress`，但是 MDN 並不推薦，因為要被棄用了。    

仔細看一下官方的範例，兩者差別在於範圍，keypress 只到中間有字符的地方，像是 shift、ctrl 就不包含，keydown 則是整個鍵盤按的到的範圍

#### HTMLMediaElement : audio  
audio 有關播放的有三種狀態  
```javascript
audio.play() //播放
audio.pasue() // 暫停
audio.reload() // 重新播放
```
`currentTime` : 目前媒體撥放的時間  

要達成的效果並不是音樂結束後才能按下一個鍵，在下一個撥放之前，要把音訊的播放時間歸零，才能達成連發聲音


### 試著優化
發現按鈕如果一直按著一段時間再放開，key 的 transition 就不會結束，導致使用者體驗不佳，明明沒按按鈕，畫面的按鈕是觸發的狀態。  
所以我讓音樂結束的同時，按鈕效果也消失。  

加入音訊的監聽事件  
```javascript
audio.addEventListener("ended", function () {
    key.classList.remove("playing");
});
```

參考 : [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

### 總結 
透過這次的實作，認識了  
1. 媒體標籤的使用  
2. `data-` : data- 標籤可以自訂資料  
3. 按鍵事件  
