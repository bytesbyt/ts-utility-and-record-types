// Utility Type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    return __assign(__assign({}, user), updates);
}
// 테스트 코드
var currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    return { id: user.id, name: user.name };
}
// 테스트 코드
var userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    return { name: user.name, email: user.email, role: user.role };
}
// 테스트 코드
var userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
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
    return members.filter(function (member) {
        return member.role === filter.role && member.isActive === filter.isActive;
    });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    return members.map(function (_a) {
        var email = _a.email, rest = __rest(_a, ["email"]);
        return rest;
    });
}
// 테스트 코드
var members = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];
// 1. 새 팀원 생성
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
