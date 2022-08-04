import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav class="navbar sticky-top navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEiklEQVR4nO2aXYhVVRiG36X4NzNkOpYjFkVJmjeBQ81QN6nRdFFYWERColjozdRFBEEEBd1YSBYE0XXXRYFCEExZjZb2Q0g/WEpeiI46A86cUdOZp4u9B7fbc/b69jlrny24H5ibWd/53vf79trnrL3XkioqKioqKipuVFw7RIAeSesk9UlaJekuSd2SuuKQCUlnJR2V9KekA5KGnHMn2+GvEIBu4CXgIM3zIzAIdJddjxngNmA3UGuh8DQTwHvA8rLrawgwB3gZGA9YeJoa8CYwr+x6rwJYCfxaYOFpfgHuKbtuSRKwkWKveiPOAU+VXfwW4FIJxc9wGdhRVvHbSyw8zWC7i99I1P3rhcvAk83UknshBKyUdEhXFjFJapJmS5rfjBkDFyRNSeqsMzYuqdc5d6QgbQmYS/a3/f1xXC/wDjAS4OqeAnYCa+LcfRmxPwNzimzAaxniI4BLxXcBbwCTibgTwDCwB/gk/tsT/+9EIm4SeB3oTOV0wNkMH68WVfxyohVZI/ZlfHYFsAHDSi7W2QDcnRHzfYaPcWBZs3VmGdudIQqwN7hoYy9ferzsCi3YjX9tPxRUNNvP1x4vExgfoGYZNTdJ6vDErCb1HVAEscZqT1inpOcs+awN2GyImVb9n6fQdMVaPp4PogYsA6Y9U24aWBtE0OZpndHTrSHENnmEAD4LUFdeX18YfD3ry2O5BfoMMR8YYkLzviGm3xdgacAqz/g5Sd8Z8oTmW0XL3yx83k0NWOEZP+Kcu2TIExTn3H+S/vaE+bybGnCzZ3zEkKMoTnvGF/kSWBpQ76kvSVFPfhYWeMZ93k0N8MUsMeQoils84976LA2YbNFEkfiaX/MlsDTAd5/1ALcb8gQFuFP+Bni/nywNOGaIedQQE5oBQ8y/vgBLAw4bYp4xxITmaUOM17ulAYcMMQPAw4a4IADrJT1iCD0YQqzH8OAB8BtwU8uCfj8LgcMGP1PA0lCiPxgEAYYA329zKz46gG+MXg6EFH7BKArwO/BAMPErHvqBP3L42BpSvINr38R+CmwFPgbOp8amgM+Bx2hhJxdYADwO7I1zWjlD6JkIvJsS+Yn4LS9wH3CsgZka8BXR/v4ag04/8CHRVL+Qo+gkO4MWHxvrAcZSQqeA3nj8XrJfnP4D+N4rzuwlHG+ycIBRQn351TG3o47gcWBRPL4tw5h5AxN4pYUGbC+k+NjYLGB/HdG3EzGDXDsTzpPjQAPRLdUMw4D1Ra+k5jdH9+vqZ+1xSXc458bimCWS1ktaKOmkohNfvrc3SY3Fik6N5WFU0oPOub9yfi4/wFrgYqr7HwXMPzfnlb9IG1eiMya31DGyiwAHmIB5OYqfBiz7FuGJm5CeCUeBt4AniLayB4AXgdk58s7PceXLKT5h9iHgtMGseWYQLYB8jNLuad8IomNywx7D3jVAIl+HJ9cw18sxuRmIDi5spvFsMO8bAp0NcowRHcbM9VPXVoClREdazrQwA9K3wATR+YRiVnhFEBexjWgvP/eBBaJnh31EB64XF+GxoqKioqKiouKG5n+XxmE50RmP/QAAAABJRU5ErkJggg=="/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
