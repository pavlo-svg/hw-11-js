//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount = {
  ownerName: "Pascha",
  acoountNumber: "666-666-666-666",
  balance: 66666,
  deposit(newAmount) {
    this.balance += newAmount;
    alert(`Ваш рахунок поповнено на ${newAmount} ваш баланс ${this.balance}`);
  },
  withdraw(newAmount) {
    if (newAmount <= this.balance) {
      this.balance -= newAmount;
      alert(`З вашого рахунку знято ${newAmount} ваш баланс ${this.balance}`);
    } else {
      alert("Недостатньо коштів і перестаньте тринькати гроші!");
    }
  },
};

const res = confirm("бажаєте поповнити гроші");
if (res) {
  const amount = Number(prompt("Внесіть кількість"));
  bankAccount.deposit(amount);
} else {
  const amount = Number(prompt("Бажаєте зняти?"));
  bankAccount.withdraw(amount);
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: Number(prompt("Яка температура у вас надворі?")),
  humidity: 8,
  windSpeed: 42,
  logTemperature() {
      if (this.temperature < 0) {
          return true;
      } else if (this.temperature >= 0) {
          return false;
      }
    }
};
if (weather.logTemperature()) {
    alert("температура нижче 0 градусів Цельсія");
} else {
    alert("температура вище або дорівнює 0 градусів Цельсія");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
    name: prompt("Введіть своє ім'я"),
    email: prompt("Введіть свій email").toLowerCase(),
    password: Number(prompt("Введіть свій пароль").trim()),
    login(email, password) {
        if (email === this.email && password === this.password) {
            alert("Це правильний email і пароль");
        } else {
            alert("Це неправильний email і пароль");
        }
    }
};
user.login("pavlo@gmail.com", 12345);

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
    title: "dexter morgen",
    director: "Pascha pasichnyk",
    year: 2012,
    rating: 3,
    controlRating() {
        if (this.rating > 8) {
            return true;
        } else if (this.rating <= 8) {
            return false;
        }
    },
    allThings() {
        console.log(`title: ${this.title}
diretor: ${this.director}
year: ${this.year}
rating: ${this.rating}
controlRating: ${this.controlRating()}
`);   
    },
};
movie.allThings();