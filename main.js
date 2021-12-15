//Birinchi masala
function convertion(uzs) {
    let usd = Math.round((uzs * 1000) / 10638.29) / 1000;
    let rub = Math.round((uzs * 1000) / 146.3) / 1000;
    return `${uzs} so'm = ${usd} Amerika dollari yoki ${rub} Rossiya rubli`;
}

// Ikkinchi masala. Massivdan maximal sonni aniqlash
function max(...params) {
    let maximal = params[0];
    for (let i = 1; i < params.length; i++) {
        if (maximal < params[i]) {
            maximal = params[i];
        }
    }
    return `${params} ning ichidagi eng katta son ${maximal}`;
}

// Uchinchi masala. Toq juftlikka tekshirish
function isEven(num) {
    if (num % 2 == 1) {
        return `${num} soni toq son`;
    }
    return `${num} soni juft son`;
}
// To'rtinchi masala. Ko'plikda yozish
function plural(noun, amount) {
    if (!isNaN(amount / 2) && amount >= 0) {
        if (amount > 1) {
            return `${amount}ta ${noun}lar`;
        }
        return `${amount}ta ${noun}`;
    }
    return `Parametrlarni kiritishdagi xatolik`;
}


// Beshinci masala. Letter replacer
function letterReplacer(word) {
    let firstLetter = word[0];
    let newWord = `${firstLetter}`;
    firstLetter = firstLetter.toLowerCase();
    for (let i = 1; i < word.length; i++) {
        if (word[i] == firstLetter) {
            newWord += "*";
        } else {
            newWord += word[i];
        }
    }
    return newWord;
}

//Oltinchi masala
function numberReverser(num) {
    let newNum = "";
    while (num > 0) {
        newNum += String(num % 10);
        num = Math.floor(num / 10);
    }
    newNum = parseInt(newNum);
    return newNum;
}

// Olti
function teskari(son) {
    return parseInt(String(son).split("").reverse().join(""));
}

// Yettinchi masala
function isPalindrom(word) {
    return word == word.split("").reverse().join("");
}

// Sakkizinchi masala
function alphabeticalOrder(word) {
    return word.split("").sort().join("");
}

// To'qqizinchi masala
// Algoritmlarni tekshirish uchun katta tub sonlar: 31636373 , 3411949 , 3314192745739 , 119218851371, 10963707205259
// BruteForce algoritm, son oshib borgani sari algoritm sekin ishlay boshlaydi
function isPrime(num) {
    var start = new Date().getTime();
    let limit = Math.floor(Math.sqrt(num));
    if (num <= 1) {
        return false;
    }
    if (num == 2 || num == 3) {
        return true;
    }
    for (let i = 2; i <= limit; i++) {
        if (num % i == 0) {
            var end1 = new Date().getTime();
            console.log(`Algorithm's RunTime: ${end1 - start}ms`);
            return false;
        }
    }
    var end = new Date().getTime();
    console.log(`Algorithm's RunTime: ${end - start}ms`);
    return true;
}
function isPrime2(num) {
    var start = new Date().getTime();
    if (num <= 1) {
        return false;
    }
    if (num == 2 || num == 3) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            var end1 = new Date().getTime();
            console.log(`Algorithm's RunTime: ${end1 - start}ms`);
            return false;
        }
    }
    var end = new Date().getTime();
    console.log(`Algorithm's RunTime: ${end - start}ms`);
    return true;
}

// Sonning tub yoki murakkabligini tekshirish uchun Fermaning kichik teoremasi va shartli ehtimolliklardan foydalanilgan algoritm
// k qanchalik katta bo'lsa algoritmning aniqligi ortadi
//n tublikka tekshirilayotgan son, k esa urinishlar soni
function isPrime1(n, k) {
    let start = new Date().getTime();
    function ferma(a, n, p) {
        let res = 1;
        a = a % p;
        while (n > 0) {
            // (n & 1) - sonni 2 ga bo'lgandagi qoldiq kabi ishlaydi
            if ((n & 1) == 1) res = (res * a) % p;
            //n ni 2 marta kichraytiramiz
            n = n >> 1;
            a = (a * a) % p;
        }
        return res;
    }
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;
    // k marta tekshiramiz
    while (k > 0) {
        // [2,n-2] oraliqda biror random son tanlaymiz

        let a = Math.floor(Math.random() * (n - 3) + 2);

        // Fermat's little theorem
        if (ferma(a, n - 1, n) != 1) {
            var end1 = new Date().getTime();
            console.log(`Algorithm's RunTime: ${end1 - start}ms`);
            return false;
        }

        k--;
    }
    let end = new Date().getTime();
    console.log(`Algorithm's RunTime: ${end - start}ms`);
    return true;
}

// O'ninchi masala. letterCount
function letterCount(word, letter) {
    let count = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            count++;
        }
    }
    return count;
}

// 
function algo(num) {
    let sum = 0;
    while (num>0) {
        sum += num % 10
        num=Math.floor(num/10)
    }
    if (sum >= 10) {
        return algo(sum)
    }
    return sum
}
