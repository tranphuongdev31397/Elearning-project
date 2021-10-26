import Swal from "sweetalert2";

export const questionAlert = () => {
  Swal.fire({
    title: "Bạn muốn lưu thay đổi?",
    icon: "question",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Xác nhận",
    denyButtonText: `Không`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Thay đổi ", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Thay đổi thất bại", "", "info");
    }
  });
};

export const successAlert = (successText) => {
  //successText type is string
    Swal.fire({  
        title: successText,  
        icon: 'success'
      }); 
}


export const errorAlert = (errText) => {
  //Errtext type is string
  Swal.fire({
    icon: 'error',
    title: 'Cảnh báo',
    text: errText,
  })
}