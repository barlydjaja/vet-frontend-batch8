import Cookies from "js-cookie";

export function checkLogin() {
  if (typeof Cookies.get("token") === "undefined") {
    // console.log("Belum Login");
    return false;
  } else {
    // console.log("Sudah Login");
    return true;
  }
}

export function checkIsClinic() {
  if (Cookies.get("roles") === "clinic") {
    return true;
  } else {
    return false;
  }
}

export function checkIsPatient() {
  if (Cookies.get("roles") === "patient") {
    return true;
  } else {
    return false;
  }
}

export function checkIsDoctor() {
  if (Cookies.get("roles") === "doctor") {
    return true;
  } else {
    return false;
  }
}
