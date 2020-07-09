/*
Hi! Need help with React Testing Library? The best way to get it is by forking
this codesandbox, making a reproduction of your issue (or showing what you're
trying to do) and posting a link to it on our spectrum chat:

https://testing-library.com/discord
*/

/*
If you need to use APIs that do not work in codesandbox (like jest.mock for
example), then please download this and make a github repository instead. Then
post a link to your github repo.

P.S. This is Kent here. If you got here as a response to a tweet or email you
sent me, I want to apologize for not responding more directly to you and just
answering your question. I get many requests for help like yours every
day and I don't have the bandwidth to respond to them all. Sorry :-/
*/

// here's an example
import "@testing-library/jest-dom/extend-expect";
// import userEvent from '@testing-library/user-event'
// import {render, screen} from '@testing-library/react'
import { renderHook } from "@testing-library/react-hooks";
import { useRepo } from "../useRepo";

describe("userepo hook", () => {
  it("provides correct value for repo", async () => {
    const {
      waitForValueToChange,
      result,
    } = renderHook(() => useRepo());
    console.log("current", result.current);
    await waitForValueToChange(() => result.current);

    expect(result.current.data).toStrictEqual({"name":"react-query"});
  });
});
