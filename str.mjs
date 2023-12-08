class MyString {
        reverse (string) {
            return string.split('').reverse().join('')
        }
        ucFirst(string) {
            return string[0].toUpperCase() + string.slice(1);
        }
        ucWords(string) {
            return string.split(' ').map((el) => {
                return el[0].toUpperCase() + el.slice(1).toLowerCase()
            }).join(' ')
        }
    }

    let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));