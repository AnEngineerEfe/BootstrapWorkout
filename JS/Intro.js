function doder(){
    const my= document.getElementById("p3");
    my.textContent="22222"
}

doder();

var courses = new Array("HTML","CSS","JS");
document.write(courses[10]);   //Çıktı "undefined" olacak çünkü 10.eleman yok!

function main() {
    var breakfasts = ["Peanut","Apple","Banana","Berries","Coconut"];
    var index = parseInt(readline(),10);  // Kullanıcıdan alınan inputu tam sayıya çevirir (10'luk tabana göre) . Input metin olursa çevirmez!

    breakfasts[index]="Fluffy Pancakes";
    console.log(breakfasts);  // array'i gösterecek!
}

var numbers = new Array(3);  // Diyorsun ki 3 elemanlı olsun. (Parantez içini boş da bırakabilirsin.O zaman istediğin kadar eleman )
numbers[0]=2;
numbers[1]=5;
courses[2]="New Balance";    // Array içinde birden fazla türde (string,int,float vs.)  olabilir!

var courses=["HTML","CSS"];
document.write(courses.length); // .length = Array'ın eleman sayısını verir.

// Array is a special type of object!

var c1=["Now","Play"];
var c2=["Legend","Any"];
var courses=c1.concat(c2);  //concat: arrayları birleştirir (c1'in ucuna c2'yi koyar)  (Courses=["Now","Play","Legend","Any"])

var number=Math.sqrt(5);

function myAlert() {
    alert("Hello Worlder!");
}

setInterval(myAlert,3000);   // myAlert fonksiyonunu her 3000 mikrosaniyede (3 saniye) bir çağıracak!   clearInterval() metodu çağrılana kadar devam edecek!

var d=new Date();          // Javascriptte aylar 0'dan (Ocak) 11'e (Aralık) kadar.
var hours=d.getHours();
document.body.innerHTML= hours;

var x=new Date(year,month,day);   // girilen year,month,day değerleri var!

console.log(x.getDay);  // Girilen değerlere karşılık gelen günü verir!  Eğer değer girilmemişse şimdiki zamanı verir!

// Tüm HTML elemanları birer objedir.

var arr=document.getElementsByClassName("Demo");

arr[1].innerHTML="Hi";

var arr_=document.getElementsByTagName("Hero");

arr_[1].innerHTML="Hi";

// window.onload :  Bu olay dinleyicisi, tüm sayfa içeriği, stil sayfaları, resimler, ve diğer medya dosyaları yüklendikten sonra çalışır.
// onunload : Sayfadan ayrılırken olur.

window.onload=function() {
    var t=document.getElementById("Demo");
    t.style.color='#6600FF';
    t.style.width='100px';
}

// element.appendChild(newNode) : Newnode'u element'in çocuğu olarak atıyor.
// element(parent element).insertBefore(node1,node2) : node1'i node2'nin önüne(üstüne koyuyor).
// removeChild(node): Parent elemente uygulanır bu , çocuğunu siler.
// element.replaceChild(newNode,oldNode) : oldNode'un yerine newNode'u koyar.

function move() {
    pos+=1;
    box.style.left=pos+"px";
}

var y= setInterval(move,10);

clearInterval(y);

t.onclick=function () {
    document.body.innerHTML=Date();
}

// onchange olayı, HTML form elemanlarının (örneğin, input, select, textarea) değerleri değiştiğinde tetiklenen bir JavaScript olayını ifade eder. Odak kaybında çalışır.

/* Element.addEventListener(event,function,useCapture)

event: event type (like 'click' or 'mousedown' or 'keydown' vs.)
useCapture (Optional) : It is a boolean değeri.Olayın yakalama (capturing) aşamasında mı (true) yoksa yayılma (bubbling) aşamasında mı (false) dinleneceğini belirtir. Genellikle false olarak ayarlanır.

removeEventListener() ise kaldırır. */

// document.attachEvent() : Internet Explorer'da kullanılır.



/* Capturing propagation  (Dıştaki elemandan içtekine doğru)

elem1.addEventListener('click',myfunc,true); */

/* Bubbling propagation (İçteki elemandan dıştakine doğru)

elem2.addEventListener('click',myfunc,false); */

// if (n1.value != "" && n2.value != "") {
    // n1 ve n2 inputları boş değilse yapılacak işlemler


    // onsubmit event false olarak dönerse form gönderilmeyecek!

    // var:Global değişken (her yerde geçerli)

    // let:Locak değişken (Sadece bulunduğu yerde geçerli)

    // const: let ile aynı (Tek fark o değişkeni asla başka bir değer atayamazsın!)



    // ES6 !!!!!!!!!!!

   let name="Loler";
   let msg=`Welcome ${name}!`;       // backtick `` kullanılır . $ işareti içine yazılanı template literale uyarlar.
   console.log(msg);           
   
   let obj={a:1,b:2,c:3};   // a: Özelliğin adı (key), değeri 1
                            // b: Özelliğin adı, değeri 2
                            // c: Özelliğin adı, değeri 3
                            //Erişmmek için obj.a , obj.b vs.
   for(let v in obj) {    // her döngü adımında nesnenin bir özelliğinin adını (anahtarını) alır.
    console.log(v);       // Bu satır, v değişkeninin değerini (yani, her mevcut özellik adını) konsola yazdırır.
   }

   let list=["x","y","z"];
   for(let val of list){     // Bu sefer her döngü adımında nesnenin değerini alır (önce x,sonra y,sonra da z)
    console.log(val);          // her elemanı yazdırır.
   }

   for(let ch of "Hello") { 
    console.log(ch);       // Hello kelimesinin her harfini sırayla yazdırır.
   }

   const add = (x,y) => {
    let sum=x+y;
    console.log(sum);
   }      // (x,y) yay ayracı kaldırabiliriz, {} bunlar da olmayabilir.
   add(35,7);
    
   // forEach metodu, dizinin her bir öğesi üzerinde belirli bir işlemi gerçekleştirmek,dizinin her bir öğesi için verilen fonksiyonu bir kez çağırır.

   let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {       // numbers'daki her eleman için ayrı ayrı function(number) fonksiyonunu çağırır ve onu her elemana uygular.
    console.log(number);
});

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);               //ES6 ile yazılmış biçimi!
});

const test =(a,b=3,c=42) => {
    return a+b+c;
}

console.log(test(5));     // a'ya 5 değerini atacak!

let height=5;
let health=10;

let athlete = {
    height,   // height:height anlamına gelir ES6'da
    health    // health:health
};

var a={x:1,x:2,x:3,x:4};   // Eğer aynı anahtarı birden fazla kez tanımlarsanız, son tanım geçerli olur ve önceki tanımların üzerine yazılır.
console.log(a.x);

let tree={
    height:10,
    grow() {
     this.height+=2;    // this(tree'yi kastediyor) ile erişim sağladık height'e.
    }
};

let key = 'name';

let person = {
    [key]: 'John Doe'  // aslında name:'John Doe' oluyor.
};

console.log(person.name);

let prefix = 'user_';
let userId = 123;
let mobile = '08923'

let user = {
    [`${prefix}${userId}`]: `${mobile}`  // Tırnak içindeki şu ifade ${prefix}${userId} , property name oluyor. ${mobile} bu da property value.
};

console.log(user.user_123);

// i++ : önce i'yi kullan sonra onu 1 artır.
// ++i : i'yi 1 artır sonra onu kullan.

param.charAt(0).toUpperCase()+param.slice(1) 

/* param.charAt(n): param değişkenindeki dizedeki (n+1). karakteri alır. charAt metodu, belirtilen konumdaki karakteri döndürür.
param.charAt(0).toUpperCase(): İlk karakteri alır ve toUpperCase() metodu ile büyük harfe dönüştürür.
hello".slice(1) ifadesi "ello" döndürür. */

let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log(target); // { a: 1, b: 2, c: 3 }

/* const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

const { name, age, city } = person;

console.log(name); // 'Alice'
console.log(age);  // 25
console.log(city); // 'Wonderland' */

const numbers = [1, 2, 3, 4];

const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third); // 3

const numbers = [1, 2, 3, 4, 5];

/* const [first, , third, , fifth] = numbers;

console.log(first);  // 1
console.log(third);  // 3
console.log(fifth);  // 5 */

const numbers = [1, 2, 3];
const moreNumbers = [4, 5, ...numbers, 6, 7];

console.log(moreNumbers); // [4, 5, 1, 2, 3, 6, 7]

/* const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5] */

const myPromise = new Promise((resolve, reject) => {
    // Asenkron işlem burada yapılır
    const success = true; // İşlemin başarılı olup olmadığını simüle eder

    if (success) {
        resolve('İşlem başarıyla tamamlandı!');
    } else {
        reject('Bir hata oluştu.');
    }
});

// `Promise`'ın sonucunu işleme
myPromise
    .then(result => {
        console.log(result); // İşlem başarılıysa burası çalışır
    })
    .catch(error => {
        console.error(error); // İşlem başarısızsa burası çalışır
    });

