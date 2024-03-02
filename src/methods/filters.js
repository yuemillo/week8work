export function currency (num) {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

export function date (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}

// currency 函式（金額千分符號）：

// - `parseInt()` 是將傳進來的 `num` 轉換成 10 進位的數字
// - `toFixed(0)` 用於確保我們得到的是一個整數，因為金額通常是整數形式（[可參考](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)）
// - `replace()` 方法的目的是將每三位數的數字之間插入一個逗號

// date 函式：比較白話來說，是將一個時間戳記轉換成可讀的格式（ex：2024/2/28）
