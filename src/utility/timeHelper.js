let today = new Date();

export const getCurrentDate = () => {
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}

export const checkHoursLength = () => {
  return today.getHours().toString().length;
}

export const checkMinutesLength = () => {
  return today.getMinutes().toString().length;
}

export const getCurrentTime = () => {
  return getCurrentHours() + ':' + getCurrentMinutes() + ':00';
}

export const getCurrentHours = () => {
  return checkHoursLength() === 1 ? '0' + today.getHours() : today.getHours();
}

export const getCurrentMinutes = () => {
  return checkMinutesLength() === 1 ? '0' + today.getMinutes() : today.getMinutes();
}
