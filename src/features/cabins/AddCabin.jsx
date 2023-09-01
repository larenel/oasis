import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import CabinTable from './CabinTable'
import CreateCabinForm from './CreateCabinForm'

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((prev) => !prev)}>
//         Add new cabin
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   )
// }

export default AddCabin
