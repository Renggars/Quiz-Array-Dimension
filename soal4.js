/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    //code here
    let arr = words.split(' ')
    let jumlahHuruf = 0
    let rataRata
    for (let i = 0; i < arr.length; i++) {
      jumlahHuruf += arr[i].length
    }
    rataRata = Math.round(jumlahHuruf / arr.length)
    let result = []
    for (let j = 0; j < arr.length; j++) {
      if(arr[j].length == rataRata) {
        result.push(arr[j])
      }
    }
    return result
  }
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  console.log(averageLengthWord('I am diligent')); // []