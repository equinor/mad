import { Dialog as _Dialog } from './Dialog'
import { DialogActions } from './DialogActions';
import { DialogCustomContent } from './DialogCustomContent';
import { DialogHeader } from './DialogHeader'

type DialogFamily = typeof _Dialog & {
    Header: typeof DialogHeader;
    CustomContent: typeof DialogCustomContent;
    Actions: typeof DialogActions
};

const Dialog = _Dialog as DialogFamily;
Dialog.Header = DialogHeader;
Dialog.CustomContent = DialogCustomContent
Dialog.Actions = DialogActions

export { Dialog };
