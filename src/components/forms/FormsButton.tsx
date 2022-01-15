import Button from '@mui/material/Button';
import { FormsButtonProps } from './type'

import { createButtonsProps } from '../../helper/helper'

function FormsButton(props: FormsButtonProps) {
    const buttonProps: any = createButtonsProps(props)
    return (
        <Button {...buttonProps} >{props.button}</Button>
    )
}

export default FormsButton
