import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    // set method to GET if there is no method
    options.method = options.method || 'GET';
    // set headers to empty object if there are no headers
    options.headers = options.headers || {};

    //if options is not GET, set header 'Content-Type' to application/json,
        // and set XSRF-TOKEN header to value of XSRF-TOKEN cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }
    // call window's fetch with url and options
    const res = await window.fetch(url, options);

    // throw error if status code is 400 or higher
    if (res.status >= 400) throw res;

    // return if status is under 400
    return res;
}


// returns XSRF-TOKEN cookie; only use in development!
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
