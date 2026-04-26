import qrcode

upi_url = "upi://pay?pa=aaditya.63@superyes&pn=AADITYA%20NARAYAN&am=90.00&cu=INR"
qr = qrcode.QRCode(version=1, box_size=10, border=4)
qr.add_data(upi_url)
qr.make(fit=True)
img = qr.make_image(fill='black', back_color='white')
img.save("qr-code.jpg")
print("QR Code created successfully as qr-code.jpg")
