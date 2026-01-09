import { AuteurModel } from '../models/auteurModel.js';

export const auteurController = {
  liste:      async (req,res) => {
                const { rows } = await AuteurModel.getAll();
                res.render('pages/auteurs/liste',{ title:'Auteurs', auteurs:rows });
              },
  ajouterForm:(_,res) => 
                res.render('pages/auteurs/ajouter',{ title:'Ajouter auteur', auteur:{} }),
  ajouter:    async (req,res) => {
                try {
                  await AuteurModel.create(req.body);
                  res.redirect('/auteurs');
                } catch (error) {
                  res.status(400).render('pages/auteurs/ajouter', { 
                    title: 'Ajouter auteur', 
                    auteur: req.body, 
                    error 
                  });
                }
              },
  details:    async (req,res) => {
                const { rows:au } = await AuteurModel.getById(req.params.id);
                if (!au[0]) return res.status(404).render('pages/404',{title:'Introuvable'});
                const { rows:livres }=await AuteurModel.getLivres(req.params.id);
                res.render('pages/auteurs/details',{ title:`${au[0].prenom} ${au[0].nom}`, auteur:au[0], livres });
              },
  modifierForm:async (req,res) => {
                const { rows } = await AuteurModel.getById(req.params.id);
                if (!rows[0]) return res.status(404).render('pages/404',{title:'Introuvable'});
                res.render('pages/auteurs/modifier',{ title:'Modifier auteur', auteur:rows[0] });
              },
  modifier:   async (req,res) => {
                try {
                  await AuteurModel.update(req.params.id,req.body);
                  res.redirect(`/auteurs/${req.params.id}`);
                } catch (error) {
                  const { rows } = await AuteurModel.getById(req.params.id);
                  res.status(400).render('pages/auteurs/modifier', { 
                    title: 'Modifier auteur', 
                    auteur: rows[0] || req.body, 
                    error 
                  });
                }
              },
  supprimer:  async (req,res) => {
                try {
                  await AuteurModel.delete(req.params.id);
                  res.redirect('/auteurs');
                } catch (error) {
                  const { rows } = await AuteurModel.getAll();
                  res.status(500).render('pages/auteurs/liste', { 
                    title: 'Auteurs', 
                    auteurs: rows, 
                    error 
                  });
                }
              }
};