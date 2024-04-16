"use client"

import { useRouter } from "next/navigation"
import { useOptimistic } from "react";
import { togglePhoto } from "../actions";

export function ToggleAndNavigateButton({ id, isToggled: isToggledInitial }: { id: string, isToggled: boolean }) {
  const href = `/photos/${id}`
  const router = useRouter();
  const [isToggled, toggleOptimistic] = useOptimistic(isToggledInitial, (isToggledCurrent, _) => !isToggledCurrent)

  return (
    <>
      <div>
        {JSON.stringify(isToggled)}
      </div>
      <form action={async () => {
        toggleOptimistic(undefined)
        router.push(href, { scroll: false });
        await togglePhoto(id);

      }}>
        <button type="submit">Toggle (Modal Won't Open)</button>
      </form>
      <form action={async () => {
        const promise = togglePhoto(id);
        toggleOptimistic(undefined)
        router.push(href, { scroll: false });
        await promise;

      }}>
        <button type="submit">Toggle (Modal Opens After Delay)</button>
      </form>
    </>
  )
}

export function ToggleButton({ id, isToggled: isToggledInitial }: { id: string, isToggled: boolean }) {
  const [isToggled, toggleOptimistic] = useOptimistic(isToggledInitial, (isToggledCurrent, _) => !isToggledCurrent)

  return (
    <>
      <div>
        {JSON.stringify(isToggled)}
      </div>
      <form action={async () => {
        toggleOptimistic(undefined)
        await togglePhoto(id);
      }}>
        <button type="submit">Toggle</button>
      </form>
    </>
  )
}
