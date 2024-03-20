
    enum Role {
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER'
}

// Define an Object Literal for Permissions
const rolePermissions = {
    [Role.Admin]: { create: true, edit: true, delete: true, view: true },
    [Role.Editor]: { edit: true, view: true },
    [Role.Viewer]: { view: true }
};

// Function to check if a role has a specific permission
function hasPermission(role: Role, permission: string): boolean {
    const permissions = rolePermissions[role];
    return permissions[permission] === true;
}

// Test Cases
console.log(Admin has delete permission: ${hasPermission(Role.Admin, 'delete')}); // true
console.log(Editor has create permission: ${hasPermission(Role.Editor, 'create')}); // false
console.log(Viewer has view permission: ${hasPermission(Role.Viewer, 'view')}); // true
