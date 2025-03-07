"use strict";
class Users {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getUser() {
        return `foydalanuvchi: ${this.name}, yoshi: ${this.age}, id: ${this.id}`;
    }
}
class Admin extends Users {
    constructor(name, age, id, role) {
        super(name, age, id);
        this.role = role;
    }
    getAdminInfo() {
        return `${super.getUser()} | Roli: ${this.role}`;
    }
}
class Project {
    constructor(projectName, pages, usersCount, admin) {
        this.projectName = projectName;
        this.pages = pages;
        this.usersCount = usersCount;
        this.admin = admin;
    }
    getProjectInfo() {
        return `proyekt: ${this.projectName}, sahifalar: ${this.pages}, foydalanuvchilar: ${this.usersCount}, admin: ${this.admin.name}`;
    }
}
class SuperAdmin extends Admin {
    constructor(name, age, id, role) {
        super(name, age, id, role);
    }
    getPermissions() {
        return `SuperAdmin ${this.name} quyidagi ruxsatlarga ega: qoshish, ochirish, ozgartirish`;
    }
}
const user = new Users("Abdulaziz", 16, 1);
const admin = new Admin("Ali", 25, 2, "Admin");
const superAdmin = new SuperAdmin("Hasan", 30, 3, "SuperAdmin");
const project = new Project("Kino Sayti", 10, 5000, admin);
console.log(user.getUser());
console.log(admin.getAdminInfo());
console.log(superAdmin.getPermissions());
console.log(project.getProjectInfo());
