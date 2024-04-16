import { Photo } from '../../../components/Photo';
import { Modal } from './modal';

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Modal>
    <Photo id={id} />
  </Modal>;
}
