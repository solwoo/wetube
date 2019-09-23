export const join = (rea, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Log Out" });
export const users = (rea, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (rea, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (rea, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (rea, res) => res.render("changePassword", { pageTitle: "Change Password" });
