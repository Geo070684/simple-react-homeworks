import React, {FC, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW13.module.css"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestApi} from "./requestApi";

export const HW13: React.FC = (any) => {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>("123")

    const postRequest = (ch: boolean) => {
        requestApi.postRequest(ch)
            .then(res => {
                console.log(res.data.errorText)
                setResponse(res.data.errorText)})
            .catch(error => setResponse(error.response ? error.response.data.errorText : error.message))
            // console.log(error.response ? error.response.data.errorText : error.message))
            .finally(() => console.log("Hello from finally"))
    }

    return (<div>
        <hr/>
        <div className={s.wrapper}>
            homework13

            <SuperButton className={s.button}
                         onClick={() => postRequest(checked)}> SuperButton
            </SuperButton>

            <SuperCheckbox checked={checked} className={s.checkbox}
                           onChangeChecked={setChecked}> My checkbox
            </SuperCheckbox>
            <div> Your response: {response}</div>
            </div>

        </div>
        )
        }