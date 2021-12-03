
    /*-------------------------------
    PROBLEM-2: totalSales
    -------------------------------*/
    //---------writing function---------
    function totalSales(shirt, pant, shoe) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    if ((typeof(shirt) != 'number') || (typeof(pant) != 'number') || (typeof(shoe) != 'number')) {
    return 'Please input number';
    }
    else if (shirt < 0 || pant < 0 || shoe < 0) {
    return 'Please input all positive number';
    }
    else {
    const allShirtsPrice = perShirtPrice * shirt;
    const allPantsPrice = perPantPrice * pant;
    const allShoesPrice = perShoePrice * shoe;
    const allItemsPrice = allShirtsPrice + allPantsPrice + allShoesPrice;
    return allItemsPrice;
    }
    }
    //---------code testing-----------
    //validation check by string
    var totalSalesTaka = totalSales('a', 'b', 10);
    //validation check by negative number
    var totalSalesTaka = totalSales(-2, 3, 4);
    //validation check by number
    var totalSalesTaka = totalSales(2, 3, 4);
    //output display
    console.log(totalSalesTaka);
    /*-------------------------------
    PROBLEM-3: deliveryCost
    -------------------------------*/
    //---------writing function---------
    function deliveryCost(products) {
    if (typeof(products) != 'number') {
    return 'Please input number';
    }
    else if (products < 0) {
    return 'Please input positive number';
    }
    else {
    const perProductCostFor1To100 = 100;
    const perProductCostFor101To200 = 80;
    const perProductCostFor201ToMore = 50;
    if (products <= 100) {
    const totalCost = products * perProductCostFor1To100;
    return totalCost;
    }
    else if (products >= 101 && products <=200) {
    const costFor100 = 100 * perProductCostFor1To100;
    const restProductsOf100 = products - 100;
    const costForRestProductsOf100 = restProductsOf100 * perProductCostFor101To200;
    const totalCost= costFor100 + costForRestProductsOf100;
    return totalCost;
    }
    else {
    const costFor100 = 100 * perProductCostFor1To100;
    const costFor101T0200 = 100 * perProductCostFor101To200;
    const restProductsOf200 = products - 200;
    const costForRestProductsOf200 = restProductsOf200 * perProductCostFor201ToMore;
    const totalCost= costFor100 + costFor101T0200 + costForRestProductsOf200;
    return totalCost;
    }
    }
    }
    //---------code testing-----------
    //validation check by string
    console.log(deliveryCost('abc'));
    //validation check by negative number
    console.log(deliveryCost(-500));
    //validation check by number
    console.log(deliveryCost(230));
    /*-------------------------------
    PROBLEM-4: perfectFriend
    -------------------------------*/
    //---------writing function---------
    function perfectFriend(nameList) {
    const perfect = [];
    for(let i = 0; i < nameList.length; i++) {
    const name = nameList[i];
    if(typeof(name) != 'string'){
    return 'Please input string';
    }
    else {
    if(name.length == 5) {
    perfect.push(name);
    break;
    }
    }
    }
    return perfect;
    }
    //---------code testing-----------
    //validation check by number
    const allFrinedsList = [10, 20, 30];
    //validation check by string
    const allFrinedsList = ['Rafiqul', 'Anisul', 'Shopon', 'Kamal', 'Hasan', 'Faruk'];
    //output display
    const myPerfectFriend = perfectFriend(allFrinedsList);
    console.log(myPerfectFriend);