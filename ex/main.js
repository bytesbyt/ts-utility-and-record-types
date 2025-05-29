// Utility Type
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 함수 작성
function updateUserForm(user, updates) {
    return Object.assign(Object.assign({}, user), updates);
}
// 테스트 코드
const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return { id: user.id, name: user.name };
}
// 테스트 코드
const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    return { name: user.name, email: user.email, role: user.role };
}
// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    var _a;
    return {
        id: data.id,
        name: data.name || "",
        email: data.email || "",
        role: data.role || "developer",
        isActive: (_a = data.isActive) !== null && _a !== void 0 ? _a : true,
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    return members.filter((member) => member.role === filter.role && member.isActive === filter.isActive);
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    return members.map((_a) => {
        var { email } = _a, rest = __rest(_a, ["email"]);
        return rest;
    });
}
// 테스트 코드
const members = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];
// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 배송비 데이터 정의
const shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
function calculateShippingCost(region, costs) {
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
// Exercise 2
// 학생 점수 데이터 정의
const scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    const values = Object.values(scores);
    const total = values.reduce((sum, score) => sum + score, 0);
    return total / values.length;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
// Exercise 3
// 제품 가격 데이터 정의
const prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
// 가격 업데이트 함수 작성
function updateProductPrice(prices, product, newPrice) {
    return Object.assign(Object.assign({}, prices), { [product]: newPrice });
}
// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
