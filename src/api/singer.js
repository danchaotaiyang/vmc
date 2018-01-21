import jsonp from '@/assets/js/jsonp';
import {commonParams, options} from './config';

export const getSingerList = () => {
    const url = 'https://szc.y.qq.com/v8/fcg-bin/v8.fcg';
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        g_tk: 20974630,
    });
    return jsonp(url, data, options);
};

export const getSingerDetail = (singerId) => {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        begin: 0,
        num: 100,
        songstatus: 1,
        g_tk: 5381,
        singermid: singerId
    });
    return jsonp(url, data, options);
};
