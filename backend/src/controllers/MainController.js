import Common from 'common';

export default class MainController {
    Main(req, res) {
        return res.send({
            result: Common()
        });
    }
}