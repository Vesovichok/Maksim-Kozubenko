// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол,
// наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени,
//     изменить инвалидность, получить все данные о человеке.

class AbstractHuman {
    constructor(height, weight, name, birthday, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.disability = disability;
    }


    get getInfo() {
        const Fullinfo = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            birthday: this.birthday,
            gender: this.gender,
            disability: this.disability,
        };
        console.log(Fullinfo);
    }


    set setNewName(name) {
        this.name = name
    }

    set setDisability(disability) {
        this.disability = disability
    }
}


// const human = new AbstractHuman('180', '80', 'Ben', new Date('2000-01-01'), 'male', 'false');
// console.log(human, 'human')

// alert(`Привет, меня зовут ${human.name}`)

// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель

class Frontend extends AbstractHuman {
    constructor(height, weight, name, birthday, gender, disability, start, career) {
        super();
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.disability = disability;
        this.start = start;
        this.career = career;
    }



}

const itman = new Frontend('185', '75', 'John', new Date ('2002-12-12'), 'male', 'true',
    '2020-01-01', 'Oracle')


class Builder extends AbstractHuman {
    constructor(height, weight, name, birthday, gender, disability, location, tools, speed) {
        super()
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.disability = disability;
        this.location = location;
        this.tools = tools;
        this.speed = speed;
    }


}

const build = new Builder('190', '95', 'Vasylisa', new Date('1990-22-02'), 'female',
    'false', 'UK', 'кирка', '30',)

let tools = ['кирка', 'топор'];
