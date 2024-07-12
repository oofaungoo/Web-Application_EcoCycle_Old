from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Sample data for items, users, and rewards
items = [
    {'name': 'ขวดน้ำดื่มใส [ไม่แยกฉลาก]', 'price': '8.00', 'img': 'product.jpg'},
    {'name': 'ขวดน้ำดื่มใส [แยกฉลาก]', 'price': '13.00', 'img': 'product.jpg'},
    {'name': 'ขวดน้ำดื่มฟ้า [แยกฉลาก]', 'price': '10.00', 'img': 'product.jpg'},
    {'name': 'ขวดนมขาวขุ่น', 'price': '11.00', 'img': 'product.jpg'},
    {'name': 'ขวดพลาสติกอื่น ๆ', 'price': '2.00', 'img': 'product.jpg'},
    {'name': 'กระดาษลัง', 'price': '3.50', 'img': 'product.jpg'},
    {'name': 'กระดาษ ขาว-ดำ', 'price': '5.00', 'img': 'product.jpg'},
    {'name': 'กระดาษสี', 'price': '2.00', 'img': 'product.jpg'},
    {'name': 'เหล็กกล่อง/เหล็กเส้น', 'price': '5.00', 'img': 'product.jpg'},
    {'name': 'มึงเก่งไม่ใช่หรอ', 'price': '5.00', 'img': 'product.jpg'}
]

users = [
    {'username': 'มู่หลาน ตวัดดาบ', 'customer': 'SCIeco สาขาจีนแผ่นดินใหญ่', 'point': 200}
]

rewards = [
    {'title':'แก้วเก็บความเย็น','catalog':'ของที่ระลึก','point':'600','desc':'ก็เอาไว้เก็บความเย็น แค่นั้น'},
    {'title':'ตุ๊กตา Mr. Burny','catalog':'ของที่ระลึก','point':'1200','desc':'ตุ๊กตาน่ารัก เอาไว้เช็ดพื้นแทนผ้า'},
    {'title':'McDonold','catalog':'อาหาร','point':'600','desc':'ส่วนลดเบอร์เกอร์ปลา 12 บาท จาก 58 บาท เหลือเพียง 46 บาท!'}
]

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(items)

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/rewards', methods=['GET'])
def get_rewards():
    return jsonify(rewards)

if __name__ == '__main__':
    app.run(debug=True)
