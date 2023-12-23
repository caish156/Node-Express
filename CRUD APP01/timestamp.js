function timestamp() {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  let milisecond = date_ob.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milisecond}`;
}

export default timestamp;
