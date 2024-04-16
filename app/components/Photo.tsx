import { isPhotoToggled } from "../api";
import { ToggleAndNavigateButton, ToggleButton } from "./ToggleButton";

export async function Photo({ id, navigate = false }: { id: string; navigate?: boolean }) {
  const isToggled = (await isPhotoToggled(id)) || false;
  const ToggleComponent = navigate ? ToggleAndNavigateButton : ToggleButton;
  return (
    <div className="photo">
      <div>
        {id}
      </div>
      <ToggleComponent id={id} isToggled={isToggled} />
    </div>
  )
}
