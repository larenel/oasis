import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.log(error)
    throw new Error('Cabin can not be loaded')
  }

  return data
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  )

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //https://arkggztpluuwwodknieh.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  let query = supabase.from('cabins')

  /// Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }])
  }

  /// Edit
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)
      .select()
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.log(error)
    throw new Error('Cabin can not be created')
  }

  if (hasImagePath) return data

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  //delete cabin if error occured uploading file

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.log(storageError)
    throw new Error(
      'Cabin image coulnot be uploaded and the cabin was not created'
    )
  }
  return data
}

export const deleteCabin = async (id) => {
  const { error, data } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.log(error)
    throw new Error('Cabin can not be deleted')
  }

  return data
}
