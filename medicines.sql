-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2023 at 08:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drughouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `Id` int(11) NOT NULL,
  `molecularFomula` text DEFAULT NULL,
  `IUPAC_Name` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Mechanism` text DEFAULT NULL,
  `Uses` text DEFAULT NULL,
  `adverse_Effect` text DEFAULT NULL,
  `drugName` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`Id`, `molecularFomula`, `IUPAC_Name`, `Description`, `Mechanism`, `Uses`, `adverse_Effect`, `drugName`) VALUES
(1, 'C25H43NO18', 'O-4,6-Dideoxy-4-[[(1S,4R,5S,6S)-4,5,6-trihydroxy-3-(hydroxymethyl)-2-cyclohexen-1-yl]amino]-α-D-glucopyranosyl-(1→4)-O-α-D-glucopyranosyl-(1→4)-D-glucopyranose', 'It is a generic sold in Europe and China as Glucobay, in North America as Precose, and in Canada as Prandase. It is cheap and popular in China, but not in the U.S. Acarbose is an anti-diabetic drug used to treat diabetes mellitus type 2 and, in some countries, prediabetes.', 'By delaying the digestion of carbohydrates, acarbose slows glucose absorption, resulting in a reduction of postprandial glucose blood concentrations. Acarbose may produce weight loss by increasing glucagon-like peptide-1.', 'Acarbose is used to treat type 2 diabetes.', 'severe constipation\nsevere stomach pain, diarrhea that is watery or bloody,\neasy bruising,\nunusual bleeding (nose, mouth, vagina, or rectum),\npurple or red pinpoint spots under your skin,\nliver problems--nausea, upper stomach pain,\nstomach discomfort, gas, bloating,\nmild skin rash or itching.\n', 'acarbose'),
(2, 'C4H6N4O3S2  ', 'N-(5-Sulfamoyl-1,3,4-thiadiazol-2-yl)acetamide', 'Acetazolamide is a sulfonamide, a member of thiadiazoles and a monocarboxylic acid amide. It has a role as a diuretic, an anticonvulsant and an EC 4.2.1.1 (carbonic anhydrase) inhibitor. It is a conjugate acid of an acetazolamide(1-). It derives from a hydride of a 1,3,4-thiadiazole.', 'The anticonvulsant activity of Acetazolamide may depend on a direct inhibition of carbonic anhydrase in the CNS, which decreases carbon dioxide tension in the pulmonary alveoli, thus increasing arterial oxygen tension. The diuretic effect depends on the inhibition of carbonic anhydrase, causing a reduction in the availability of hydrogen ions for active transport in the renal tubule lumen. This leads to alkaline urine and an increase in the excretion of bicarbonate, sodium, potassium, and water.', 'Acetazolamide is used to treat edema (fluid retention) caused by heart failure or other medicines. This medicine is also used to treat seizures (eg, petit mal, unlocalized seizures). It is also used to treat open-angle glaucoma, secondary glaucoma, and acute angle-closure glaucoma before surgery to lower pressure inside the eye.\nThis medicine is also used to prevent or make the symptoms of mountain sickness better in climbers.\n', '\ndecreased hearing, ringing of the ears,\ndiarrhea,\nincreased thirst,\nkidney stones (blood in the urine; pain when urinating; pain the lower back or side),\nloss of appetite,\nfeeling faint or lightheaded, falls, muscle cramps or pain),\nnausea,\npain, tingling, numbness in the hands or feet.\n', 'Acetazolamide'),
(3, 'C6H8ClN7O', '3,5-diamino-6-chloro-N-(diaminomethylene)pyrazine-2-carboxamide', 'Mannitol is a type of sugar alcohol used as a sweetener and medication.It is used as a low calorie sweetener as it is poorly absorbed by the intestine. As a medication, it is used to decrease pressure in the eyes, as in glaucoma, and to lower increases intracranial pressure. Medically, it is given by injection or inhalation. Effects typically begin within 15 minutes and last up to 8 hours', 'Amiloride works by inhibiting sodium reabsorption in the distal convoluted tubules and collecting ducts in the kidneys by binding to the amiloride-sensitive sodium channels. This promotes the loss of sodium and water from the body, but without depleting potassium.', 'Amiloride is used with other \"water pills\"/diuretics (such as furosemide, thiazide diuretics like hydrochlorothiazide) to treat high blood pressure (hypertension), heart failure, or extra fluid in the body (edema). Amiloride also helps to treat or prevent low blood potassium levels caused by the other diuretics.', 'headache,\ndizziness,\nnausea,\nvomiting,\nloss of appetite,\nstomach/abdominal pain,\ngas,\ndiarrhoea.\n', 'amiloride mannitol'),
(4, 'C25H29I2NO3', ' (2-{4-[(2-butyl-1-benzofuran-3-yl)carbonyl]-2,6-diiodophenoxy}ethyl)diethylamine', 'Amiodarone is a class III antiarrhythmic indicated for the treatment of recurrent hemodynamically unstable ventricular tachycardia and recurrent ventricular fibrillation.', 'It blocks potassium currents that cause repolarization of the heart muscle during the third phase of the cardiac action potential. As a result amiodarone increases the duration of the action potential as well as the effective refractory period for cardiac cells (myocytes).', ' Amiodarone is used to treat life-threatening heart rhythm problems called ventricular arrhythmias. This medicine is used in patients who have already been treated with other medicines that did not work well.', 'cough,\ndizziness, lightheadedness, or fainting,\nfever (slight),\nnumbness or tingling in the fingers or toes,\npainful breathing,\nsensitivity of the skin to sunlight,\ntrembling or shaking of the hands,\ntrouble with walking,\n', 'amiodarone'),
(5, 'C20H25ClN2O5.C6H6O3S', '(RS)-3-ethyl 5-methyl 2-[(2-aminoethoxy)methyl]-4-(2-chlorophenyl)-6-methyl-1,4-dihydropyridine-3,5-dicarboxylate', 'sold under the brand name Norvasc among others, is a calcium channel blocker medication used to treat high blood pressure and coronary artery disease. It is taken by mouth.', 'Amlodipine is considered a peripheral arterial vasodilator that exerts its action directly on vascular smooth muscle to lead to a reduction in peripheral vascular resistance, causing a decrease in blood pressure.', 'Amlodipine is used alone or in combination with other medications to treat high blood pressure in adults and children 6 years and older. It is also used to treat certain types of angina (chest pain) and coronary artery disease (narrowing of the blood vessels that supply blood to the heart).', 'swelling of the hands, feet, ankles, or lower legs,\nheadache,\nupset stomach,\nnausea,\nstomach pain,\ndizziness or light-headedness,\ndrowsiness,\nexcessive tiredness,\n', 'amlodipine');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
