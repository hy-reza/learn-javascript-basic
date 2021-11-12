//tipe data number (berupa angka)
document.writeln(1)
document.writeln(2)
document.writeln(3)
document.writeln("<br></br>")
//tipe data bolean (terdiri dari 2 statment yaitu benar (true) dan salah(false))
document.writeln(true)
document.writeln(false)
document.writeln("<br></br>")
//tipe data string (Berupa kalimat / huruf)
document.writeln('ini merupakan tipe data string')

//Tipe data array 

let nama = ['Handy', 'Reza', 'Alfanda']
let number = [1,2,3,4,5,6,7,8,9]
nama.push('Cholid', 'Firdaus', 'Abada')
nama.pop('Abada')
nama[0] = 'hy'
delete nama[0]
console.table(nama)
console.table(number)
console.info(number.length)

//Tipe data object / dictionary

const obj = {
    'nama' : ['Cholid', 'Reza', 'Ahyar'], 
    'asal' : ['Malang', 'Galek']
}

console.table(obj)
obj.nama.push('Alfanda')
console.table(obj.nama)


//Tipe data undifined (Tipe data yang belum di set datanya)
let undead
console.log(undead)

if(undead == undefined){
    alert('udead adalah tipe data undefinded')
}else{
    alert('udead bukan tipe data undefinded')
}

let asal = ['handy', 'reza']

if(asal[2] === undefined){
    console.log('undefinded')
}else{
    console.log('definded')
}

//Null
let kosong = ''