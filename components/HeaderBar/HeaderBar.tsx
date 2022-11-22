import { KeyboardEvent, useRef, useState } from "react";
import Logo from "../../shared/ui/Logo";
import RequestInviteButton from "../../shared/ui/RequestInviteButton";
import listItems from "./listItems";

function HeaderBar() {
  const [showDialog, setShowDialog] = useState(false);

  const dialogControlRef = useRef<HTMLButtonElement>(null);
  const firstListItemRef = useRef<HTMLAnchorElement>(null);
  const lastListItemRef = useRef<HTMLAnchorElement>(null);

  const openDialog = () => {
    setShowDialog(true);

    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
  }

  const closeDialog = () => {
    setShowDialog(false);

    document.body.style.overflowY = "initial";
    document.body.style.height = "initial";
  }

  const focusOnDialogControl = () => {
    const dialogControl = dialogControlRef.current!;
    dialogControl.focus();
  }

  const focusOnFirstListItem = () => {
    const firstListItem = firstListItemRef.current!;
    firstListItem.focus();
  }

  const focusOnLastListItem = () => {
    const lastListItem = lastListItemRef.current!;
    lastListItem.focus();
  }

  const handleClickShowDialog = () => {
    openDialog();
  }

  const handleClickHideDialog = () => {
    closeDialog();
  }

  const handleKeyDownShowDialog = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      openDialog();
      e.preventDefault();
    }
  }

  const handleKeyDownHideDialog = (e: KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Escape") {
      closeDialog();
      e.preventDefault();
    } else if (e.shiftKey && e.code === "Tab") {
      focusOnLastListItem();
      e.preventDefault();
    }
  }

  const handleKeyDownListItem = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      closeDialog();
      e.preventDefault();
      focusOnDialogControl();
    }
  }

  const handleKeyDownFirstListItem = (e: KeyboardEvent) => {
    if (e.code === "Tab" && e.shiftKey) {
      focusOnLastListItem();
      e.preventDefault();
    } else {
      handleKeyDownListItem(e);
    }
  }

  const handleKeyDownLastListItem = (e: KeyboardEvent) => {
    if (e.code === "Tab" && !e.shiftKey) {
      focusOnFirstListItem();
      e.preventDefault();
    } else {
      handleKeyDownListItem(e);
    }
  }

  return (
    <>
      <header 
        className="bg-white absolute flex justify-between items-center w-full p-4 md:py-0 lg:px-28 lg:py-0 z-20"
        aria-modal="true"
        aria-labelledby="nav"
        aria-describedby="nav"
      >
        <Logo />

        <button
          ref={dialogControlRef}
          className="md:hidden" 
          data-testid="menu"
          onClick={showDialog ? handleClickHideDialog: handleClickShowDialog}
          onKeyDown={showDialog ? handleKeyDownHideDialog : handleKeyDownShowDialog}
        >
          {showDialog ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className="hidden md:block">
          <ul className="h-16">
            {listItems.map((listItem) => (
              <li key={listItem} className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
                <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">{ listItem }</a>
              </li>
            ))}
          </ul> 
        </nav>

        <div className="hidden md:block">
          <RequestInviteButton />
        </div>
      </header>

      {showDialog && <div className="bg-gradient-to-b from-gray-800 to-transparent absolute flex justify-center items-center w-full top-0 bottom-0 z-10" role="dialog">
        <nav className="text-dark-blue bg-white text-center w-10/12 py-4">
          <ul>
            {listItems.map((listItem) => (
              <li key={listItem} className="py-2">
                {listItem === "Home" ? (
                  <a href="#" ref={firstListItemRef} onKeyDown={handleKeyDownFirstListItem}>{ listItem }</a>
                ) : listItem === "Careers" ? (
                  <a href="#" ref={lastListItemRef} onKeyDown={handleKeyDownLastListItem}>{ listItem }</a>
                ) : (
                  <a href="#" onKeyDown={handleKeyDownListItem}>{ listItem }</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>}
    </>
     
  )
}

export default HeaderBar;