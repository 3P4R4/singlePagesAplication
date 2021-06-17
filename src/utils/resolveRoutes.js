const resolveRoutes = (route) => {
    if (route.length <=3) {
        let validRoutes = route === '/' ? route: '/:id';
        return validRoutes;
    }
    return `/${route}`;
};

export default resolveRoutes;