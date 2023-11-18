class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

class Airplane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
  }
}

// إنشاء objects
const car1 = new Car("Car 1", "Manufacturer 1", "001", "Gas");
const car2 = new Car("Car 2", "Manufacturer 2", "002", "Electric");
const car3 = new Car("Car 3", "Manufacturer 3", "003", "Gas");

const airplane1 = new Airplane("Airplane 1", "Manufacturer 4", "101", "Type 1");
const airplane2 = new Airplane("Airplane 2", "Manufacturer 5", "102", "Type 2");

// الحجوزات
const reservations = [];

// دالة لإسناد المركبة إلى الموظف
function assignVehicleToEmployee(employeeId, vehicleId) {
  const employee = findEmployeeById(employeeId);
  const vehicle = findVehicleById(vehicleId);

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("لا يتوافق طيّار مع سيارة.");
  } else if (employee instanceof Driver && vehicle instanceof Airplane) {
    const reservation = new Reservation(
      new Date(),
      employeeId,
      vehicleId,
      reservations.length + 1
    );
    reservations.push(reservation);
    console.log("تم إنشاء حجز جديد.");
  } else {
    console.log("توافق الموظف والمركبة.");
  }
}

// دالة للبحث عن الموظف بواسطة الـ ID
function findEmployeeById(employeeId) {
  // قم بتنفيذ البحث هنا
}

// دالة للبحث عن المركبة بواسطة الـ ID
function findVehicleById(vehicleId) {
  // قم بتنفيذ البحث هنا
}

// الاختبار
assignVehicleToEmployee("001", "101");
assignVehicleToEmployee("002", "102");
assignVehicleToEmployee("003", "101");

// طباعة محتوى المصفوفة باستخدام دالة map
reservations.map((reservation) => {
  console.log(reservation);
});