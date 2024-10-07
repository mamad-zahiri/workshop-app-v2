import moment from "moment"

const latinToPersianDigit = (text: string): string => {
  const digits: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  }

  let output: string[] = []
  for (let i = 0; i < text.length; i++) {
    const digit: string | undefined = digits[text[i]]

    if (text[i] in digits) {
      output.push(digit)
    } else {
      output.push(text[i])
    }
  }

  return output.join("")
}


const datetimeToStr = (datetime: string): string => {
  const date = moment(datetime)
  console.log(date)
  return date.format("M/D HH:mm")
}

export { datetimeToStr, latinToPersianDigit }
