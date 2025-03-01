class Users {
  constructor(public name: string, public age: number, public id: number) {}

  getUser(): string {
    return `foydalanuvchi: ${this.name}, yoshi: ${this.age}, id: ${this.id}`;
  }
}

class Admin extends Users {
  constructor(name: string, age: number, id: number, public role: string) {
    super(name, age, id);
  }

  getAdminInfo(): string {
    return `${super.getUser()} | Roli: ${this.role}`;
  }
}

class Project {
  constructor(
    public projectName: string,
    public pages: number,
    public usersCount: number,
    public admin: Admin
  ) {}

  getProjectInfo(): string {
    return `proyekt: ${this.projectName}, sahifalar: ${this.pages}, foydalanuvchilar: ${this.usersCount}, admin: ${this.admin.name}`;
  }
}

class SuperAdmin extends Admin {
  constructor(name: string, age: number, id: number, role: string) {
    super(name, age, id, role);
  }

  getPermissions(): string {
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
