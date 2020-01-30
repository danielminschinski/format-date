const formatDate = (timeInSeconds) => {
    
    const hours = timeInSeconds > 3600 ? Math.floor(timeInSeconds / 3600) : 0;
    const minutes = timeInSeconds > 60 ? (Math.floor(timeInSeconds / 60) - (hours * 60)) : 0;
    const seconds = timeInSeconds - (minutes * 60) - (hours * 3600);

    const calculatedTime = (hours > 0 ? `${hours}h ` : ``) + (minutes > 0 ? `${minutes}m ` : ``) + (seconds > 0 ? `${seconds}s` : ``);

    if(timeInSeconds === undefined || timeInSeconds === NaN){
        return `0s`;
    }else {
        return calculatedTime.trim()
    }
}

module.exports = formatDate;