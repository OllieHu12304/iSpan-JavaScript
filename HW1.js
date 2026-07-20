// 1.	選擇性敘述的練習-season
// 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。
let month = n; // 假設輸入的月份為 n

switch (month) {
    case 3:
    case 4:
    case 5:
        document.write("春");
        break;
    case 6:
    case 7:
    case 8:
        document.write("夏");
        break;
    case 9:
    case 10:
    case 11:
        document.write("秋");
        break;
    case 12:
    case 1:
    case 2:
        document.write("冬");
        break;
    default:
        document.write("輸入錯誤");
}

// 2.	選擇性敘述的練習-salary
// 輸入便利商店工讀生的工作時數，並計算其薪資。
// 60小時以內，時薪120元。
// 61~80小時，以時薪1.25倍計算。
// 81小時以上，以時薪1.5倍計算。
// 說明：薪資以累計方式計算。若工時為90小時，則薪資為60*120 + 20*120*1.25 + 10*120*1.5元。
let hours = 75; // 假設輸入的工時變數為 hours (或 n)

// 判斷邏輯：
// 只要 hours 不是大於等於 0 的數字，第一關 (hours >= 0) 就會擋掉（包含負數與字串）
if (!(hours >= 0)) {
    document.write("輸入錯誤");
} else if (hours <= 60) {
    let salary = hours * 120;
    document.write("您本月薪資為" + salary + "元");
} else if (hours <= 80) { // 能進到這裡，代表 hours 一定大於 60
    let salary = 7200 + (hours - 60) * 120 * 1.25;
    document.write("您本月薪資為" + salary + "元");
} else { // 能進到這裡，代表 hours 一定大於 80
    let salary = 10200 + (hours - 80) * 120 * 1.5;
    document.write("您本月薪資為" + salary + "元");
}

// 3.	選擇性敘述的練習-leapYear
// 輸入一西元年，如2015。判斷此年份是否為閏年。
// 提示：每四年一閏，每百年不閏，每四百年一閏。
let years = 2000;

if (!(years >= 0)) {
    document.write("輸入錯誤");
} else if ((years % 4 == 0 && years % 100 != 0) || (years % 400 == 0)) {
    document.write("西元" + years + "年是閏年！");
} else {
    document.write("西元" + years + "年不是閏年 :(");
}

// 4.	選擇性敘述的練習-refund
// 輸入在某商店購物應付金額與實付金額。
// 實付金額小於應付金額，則印出”金額不足”。
// 實付金額等於應付金額，則印出”不必找錢”。
// 實付金額大於應付金額，則輸出找回金額最少的鈔票數和錢幣數。
// 假設幣值只有1000, 500, 100元紙鈔和50, 10, 5, 1元硬幣。
// 說明：若買了132元的商品，付1000元，應找回一張500元，三張100元，一個50元硬幣，一個10元硬幣，一個5元硬幣和三個1元硬幣。
let pp = 2080;
let paid = 10000;

if (paid <= pp) {
    document.write("金額不足")
} else if (paid == pp) {
    document.write("不必找錢")
} else if (paid > pp) {
    document.write("應找回" + Math.floor((paid - pp) / 1000) + "張1000元" + Math.floor(((paid - pp) % 1000) / 500) + "張500元" + Math.floor((((paid - pp) % 1000) % 500) / 100) + "張100元" + Math.floor(((((paid - pp) % 1000) % 500) % 100) / 50) + "個50元" + Math.floor((((((paid - pp) % 1000) % 500) % 100) % 50) / 10) + "個10元" + Math.floor(((((((paid - pp) % 1000) % 500) % 100) % 50) % 10) / 5) + "個5元" + Math.floor((((((((paid - pp) % 1000) % 500) % 100) % 50) % 10) % 5) / 1) + "個1元")
}

//
let pp = 2080;
let paid = 10000;

if (paid < pp) {
    document.write("金額不足");
} else if (paid == pp) {
    document.write("不必找錢");
} else {
    // 1. 先算出總共要找多少錢
    let change = paid - pp;

    // 2. 依序算出各種面額數量，並不斷更新剩餘金額 (change)
    let n1000 = Math.floor(change / 1000);
    change = change % 1000; // 扣掉 1000 元後剩下的錢

    let n500 = Math.floor(change / 500);
    change = change % 500;

    let n100 = Math.floor(change / 100);
    change = change % 100;

    let n50 = Math.floor(change / 50);
    change = change % 50;

    let n10 = Math.floor(change / 10);
    change = change % 10;

    let n5 = Math.floor(change / 5);
    let n1 = change % 5; // 剩下的就是 1 元

    // 3. 組合輸出
    document.write(
        "應找回：" +
        n1000 + "張1000元，" +
        n500 + "張500元，" +
        n100 + "張100元，" +
        n50 + "個50元，" +
        n10 + "個10元，" +
        n5 + "個5元，" +
        n1 + "個1元"
    );
}