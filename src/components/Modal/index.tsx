import { PropsWithChildren } from "react";

interface ModalProps {
  modal: boolean;
  modalHandler: () => void;
  title?: string;
  header?:JSX.Element
}
export default function Modal({
  modal,
  modalHandler,
  title,
  children,
  header
}: PropsWithChildren<ModalProps>) {
  return (
    <>
      {modal ? (
        <>
          <div
            role="dialog"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {header}                
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                   {title && ( <h3 className="text-3xl font-semibold">{title}</h3>)}
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={modalHandler}
                    >
                      <span className="bg-transparent text-black font-bold h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>                
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
