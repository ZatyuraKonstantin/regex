// TODO: write your code here
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));

export default class Validator {
    constructor(username) {
      this.username = username;
    }
  
    validateUsername() {
      return (/^[^\d-_][\w-]+[^\d-_]$/.test(this.username)) && !(/\d{4,}/.test(this.username));
    }
  }