import FetchDataService from '../services/fetch.data.service';
import { HTTP_STATUS_CODE, APP_CONST, appResponse, validateInput } from "../utils";

class FetchDataController {
    async fetchData(req, res){
        try {
            const { body } = req;
            if(!validateInput(body)) {
                throw new Error(APP_CONST.BAD_INPUT);
            }

            const response = await FetchDataService.fetchData(body);
            res.status(HTTP_STATUS_CODE.SUCCESS)
                .json(
                    appResponse(
                        response,
                        APP_CONST.SUCCESS_CODE,
                        APP_CONST.SUCCESS_MESSAGE
                    )
                );
        } catch (error) {
            res.status(HTTP_STATUS_CODE.BAD_REQUEST)
                .json(
                    appResponse(
                        error,
                        HTTP_STATUS_CODE.BAD_REQUEST,
                        error.message)
                );
        }
    }
}

export default new FetchDataController;