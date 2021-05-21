import interceptError from '../interceptors/interceptError';
import { baseRequest as request } from './createRequest';

interceptError(request)

export default request