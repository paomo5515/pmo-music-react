// 解析歌词

/* 
  [00:00.000] 作词 : 许嵩
  [00:01.000] 作曲 : 许嵩
  [00:02.000] 编曲 : 许嵩
  [00:22.240]天空好想下雨
  [00:24.380]我好想住你隔壁
  [00:26.810]傻站在你家楼下 
*/
// [00:26.810]傻站在你家楼下 
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
  // 每一行的歌词, 
  // 将字符串转换为数组 
  const lineStrings = lyricString.split("\n")

  const lyrics = []
  for (const line of lineStrings) {
    if (line) {
      // [00:26.810]傻站在你家楼下 
      // console.log(line);
      const result = parseExp.exec(line)
      //  ['[00:00.000]', '00', '00', '000', index: 0, input: '[00:00.000] 作词 : 许嵩', groups: undefined]
      // console.log(result);
      // 分钟 转毫秒  字符串需要转数字
      const time1 = result[1] * 60 * 1000
      // 秒
      const time2 = result[2] * 1000
      // 毫秒
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3
      // console.log(time);

      const content = line.replace(parseExp, "").trim()
      const lineObj = { time, content }
      lyrics.push(lineObj)
      // console.log(lineObj);
    }
  }
  return lyrics;
}