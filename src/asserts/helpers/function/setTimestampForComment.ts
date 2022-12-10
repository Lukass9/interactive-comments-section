import { CommentsStruct, ReplyStruct } from "../../interfaces/interfaces";

export const setTimestamForComment = (postTimestamp: number | undefined, timestamp: number, arr: CommentsStruct | ReplyStruct) => {
    const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'long' });
    let formatTime: Intl.RelativeTimeFormatUnit = 'second'
    let timeValue
    if (postTimestamp !== undefined) timeValue = Math.floor((postTimestamp - timestamp) / 1000)
    if (timeValue !== undefined) {            
            if (Math.abs(timeValue) >= 60) {
                formatTime = "minute"
                timeValue = Math.floor(timeValue / 60)
                if (Math.abs(timeValue) >= 60) {
                    formatTime = "hour"
                    timeValue = Math.floor(timeValue / 60)
                    if (Math.abs(timeValue) >= 24) {
                        formatTime = "day"
                        timeValue = Math.floor(timeValue / 24)
                        if (Math.abs(timeValue) >= 7) {
                            formatTime = "week"
                            timeValue = Math.floor(timeValue / 7)
                            if (Math.abs(timeValue) >= 4) {
                                formatTime = "month"
                                timeValue = Math.floor(timeValue / 4)
                                if (Math.abs(timeValue) >= 12) {
                                    formatTime = "year"
                                    timeValue = Math.floor(timeValue / 12)
                                }
                            }
                        }
                    }
                }
            }
            if(timeValue) arr.createdAt = rtf1.format(timeValue, formatTime)
    }
}