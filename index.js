$("#generateButton").click(function () {
  genQrCode()
});

function genQrCode() {
  var accName = $("#accName").val();
  var accNumber = $("#accNumber").val();
  var accIFSC = $("#accIFSC").val();

  //TODO - Show Error on empty Box.
  console.log(accName, accNumber, accIFSC);
  var str = "upi://pay?pa=" + accNumber + "@" + accIFSC +".ifsc.npci&pn=" + accName + "&cu=INR";

  var qrcode = new QRCode("box1", {
    text: str,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

$("#DownloadQrImage").click(function () {
  DownloadQrImage();
});

function DownloadQrImage() {
  html2canvas($("#A4Page"), {
      letterRendering: 1,
      allowTaint : true,
  		onrendered: function (canvas) {
        document.body.appendChild(canvas)
  			// canvas.toBlob(function (blob) {
  			// 	saveAs(blob, "UPI_QR_Code.png");
  			// });
  		}
  });
}
