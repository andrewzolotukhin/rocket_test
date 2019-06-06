import MainController from '../controllers/MainController';

function routes(router) {
    const mainCtrl = new MainController();
    //routes should be here...
    router.get('/v1/main', mainCtrl.Main);
}

export default routes;
