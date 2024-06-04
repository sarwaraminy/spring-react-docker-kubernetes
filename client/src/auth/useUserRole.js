export const useUserRole = () => {
    const roleString = localStorage.getItem('userRole') || sessionStorage.getItem('userRole');
    if (roleString) {
        try {
            const roles = JSON.parse(roleString);
            return roles; // Assuming roles is an array of role strings
        } catch (e) {
            console.error('Failed to parse userRole:', e);
            return [];
        }
    }
    return [];
};
